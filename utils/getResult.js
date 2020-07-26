const axios = require('axios').default

class Result {
    constructor() {}

    async generateDeviceId() {
        const lower = "abcdefghijklmnopqrstuvwxyz"
        const upper = lower.toUpperCase()
        const digits = "1234567890"
        const chars = lower + upper + digits
        let result = ''
        for (let i=0; i<16; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }

    async subResult(enrollment, examId, subjectCode) {
        const headers = {
            'Password': 'convo@2013',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '92',
            'Host': 'ws-gtur.gtu.ac.in',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/2.7.2',
        }
        const payload = {
            'ReqOperation': 'ViewSubjectGrade',
            'ExamID': String(examId),
            'EnrNo': String(enrollment),
            'SubjectCode': String(subjectCode),
            'IsCurrent': '0'
        }
        const res = await axios({
            method: 'POST',
            url: 'http://ws-gtur.gtu.ac.in/fetchapps/fetchApplications',
            headers: headers,
            data: payload,
            responseType: 'json'
        })
        return res.data
    }

    async populateResult(data, enrollment, examId) {
        data = data[0]
        const subjectCodes = []
        for (let i=0; i<16; i++) {
            if (data['SUB' + i.toString()] != "") {
                const subCode = data['SUB' + i.toString()]
                subjectCodes.push(subCode)
            }
        }
        const toDel = []
        for (let key of Object.keys(data)) {
            if ((/SUB.+/).test(key)) {
                toDel.push(key)
            }
        }
        for (let key of toDel) {
            delete data[key]
        }
        const subjectResults = []
        for (let sc of subjectCodes) {
            subjectResults.push(await this.subResult(enrollment, examId, sc))
        }
        data.subjects = subjectResults
        return data
    }

    static async fromEnrollment(enrollment, examId) {
        const headers = {
            'Password': 'convo@2013',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'ws-gtur.gtu.ac.in',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/2.7.2',
        }
        const data = {
            'ReqOperation': 'StudentResult',
            'ExamID': String(examId),
            'EnrNo': String(enrollment),
            'DeviceId': await generateDeviceId(),
            'OSversion': '29',
            'LatLong': '0',
            'MobileNo': '916929696969',
            'IMEI_NO': '0',
            'IPAddress': '7a54:8059:4d78:551f:6065:9eda:7720:f6eb%dummy0',
            'IsCurrent': '0'
        }
        const res = await axios({
            method: 'POST',
            url: 'http://ws-gtur.gtu.ac.in/fetchapps/fetchApplications',
            headers: headers,
            data: data,
            responseType: 'json'
        })
        if (res.status == 200 || res.status == 201) {
            return populateResult()
        } else {
            console.log(res.data)
            console.log("Found some issues maybe!")
        }
    }
}