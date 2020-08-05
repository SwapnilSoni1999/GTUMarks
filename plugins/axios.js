import Crypto from 'crypto-js'

export default function ({ $axios, store }) {

    $axios.onRequest(async (ctx) => {
        if (process.client) {
            const { JSEncrypt } = await import('jsencrypt')
            const rsa = new JSEncrypt({ default_key_size: 1024 })
            rsa.setPublicKey(store.state.publicKey)
            const xKey = rsa.encrypt(store.state.ticket)
            ctx.headers['x-key'] = xKey
        }

        // encrypt payload if there 
        if (process.client && ctx.data) {
            ctx.headers['content-type'] = 'application/encrypted-json'
            const data = JSON.stringify(ctx.data).toString()
            const key = Crypto.enc.Utf8.parse(store.state.ticket)
            const iv = Crypto.enc.Hex.parse('0000000000000000')
            const encrypted = Crypto.AES.encrypt(Crypto.enc.Utf8.parse(data), key, { mode: Crypto.mode.CBC, iv: iv, padding: Crypto.pad.Pkcs7 })
            ctx.data = Crypto.enc.Base64.stringify(encrypted.ciphertext)
        }
        return ctx
    })

    $axios.onResponse((ctx) => {
        const data = ctx.data
        // decrypt data 
        if (data) {
            const ciphertext = Crypto.enc.Base64.parse(data)
            const key = Crypto.enc.Utf8.parse(store.state.ticket)
            const iv = Crypto.enc.Hex.parse('0000000000000000')
            const decrypted = Crypto.AES.decrypt({ ciphertext: ciphertext }, key, { mode: Crypto.mode.CBC, iv: iv, padding: Crypto.pad.Pkcs7 })
            ctx.data = JSON.parse(decrypted.toString(Crypto.enc.Utf8))
        }
        return ctx
    })
}