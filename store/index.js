export const state = () => ({
    ticket: '',
    publicKey: "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCF7Sh46Nn0veiDrSIuEq7b8MI1QFMNH/Ec8vEp83rUK1msBBnc3Ohi3nXypSQffcf8rND4BTCTEE2jXKIvzjJ5yVpg8d0bFn4paf1lrZDU1lCRijf8tLFdbck6yFddXjX3FoSAVBi13k9aPmc89cVAiIzDQ/E5LMD0kpTWMxShNQIDAQAB-----END PUBLIC KEY-----"
    // publicKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCF7Sh46Nn0veiDrSIuEq7b8MI1QFMNH/Ec8vEp83rUK1msBBnc3Ohi3nXypSQffcf8rND4BTCTEE2jXKIvzjJ5yVpg8d0bFn4paf1lrZDU1lCRijf8tLFdbck6yFddXjX3FoSAVBi13k9aPmc89cVAiIzDQ/E5LMD0kpTWMxShNQIDAQAB"
})

export const mutations = {
    SET_TICKET(state, ticket) {
        state.ticket = ticket
    },
    SET_XKEY(state, xkey) {
        state.xkey = xkey
    }
}

export const actions = {
    async nuxtServerInit({ commit, state }) {
        const lower = "abcdefghijklmnopqrstuvwyz"
        const upper = lower.toUpperCase()
        const digits = "1234567890"
        const chars = lower + upper + digits
        let tikit = ''
        for (let i=0; i<16; i++) {
            tikit += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        commit('SET_TICKET', tikit)
        console.log("Ticket", tikit)
    },
    async getSessions() {
        const res = await this.$axios.get('/api/sessions')
        return res
    },
    async getCourses({}, sessionId) {
        const res = await this.$axios.post('/api/course', { examSession: sessionId })
        return res
    },
    async getExams({}, payload) {
        const res = await this.$axios.post('/api/exam', { examSession: payload.sessionId, examType: payload.course })
        return res
    }
}
import axios from 'axios'
axios.post('', '', {  })

export const getters = {
    xKey(state) {
        return state.xKey
    }
}