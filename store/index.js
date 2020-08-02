export const state = () => ({
    ticket: '',
    publicKey: "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCF7Sh46Nn0veiDrSIuEq7b8MI1QFMNH/Ec8vEp83rUK1msBBnc3Ohi3nXypSQffcf8rND4BTCTEE2jXKIvzjJ5yVpg8d0bFn4paf1lrZDU1lCRijf8tLFdbck6yFddXjX3FoSAVBi13k9aPmc89cVAiIzDQ/E5LMD0kpTWMxShNQIDAQAB-----END PUBLIC KEY-----",
    resultData: {}
})

export const mutations = {
    SET_TICKET(state, ticket) {
        state.ticket = ticket
    },
    SET_XKEY(state, xkey) {
        state.xkey = xkey
    },
    SET_RESULT(state, result) {
        state.resultData = result
    }
}

export const actions = {
    async nuxtServerInit({ commit, state }) {
        const lower = "abcdefghijklmnopqrstuvwyz"
        const upper = lower.toUpperCase()
        const digits = "1234567890"
        const chars = lower + upper + digits
        let tikit = ''
        for (let i = 0; i < 16; i++) {
            tikit += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        commit('SET_TICKET', tikit)
        console.log("Ticket", tikit)
    },
    async getSessions() {
        const res = await this.$axios.get('/api/sessions')
        return res
    },
    async getCourses({ }, sessionId) {
        const res = await this.$axios.post('/api/course', { examSession: sessionId })
        return res
    },
    async getExams({ }, payload) {
        const res = await this.$axios.post('/api/exam', { examSession: payload.sessionId, examType: payload.course })
        return res
    },
    async getResult({ commit }, payload) {
        const res = await this.$axios.post('/api/result', { enrollment: payload.enrollment, examId: payload.examid })
        commit('SET_RESULT', res.data)
        console.log(res.data)
    }
}

export const getters = {
    gotResult(state) {
        return Object.keys(state.resultData).length !== 0
    },
    studentName(state) {
        return state.resultData.name
    },
    studentExam(state) {
        return state.resultData.extype + " - " + state.resultData.CourseName
    },
    studentBranch(state) {
        return ""
    },
    enrollment(state) {
        return state.resultData.enrollment
    },
    seatNo(state) {
        return state.resultData.ExamNumber
    },
    declared(state) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ]
        const date = new Date(state.resultData.DECLARATIONDATE)
        return ('0' + date.getDate()).slice(-2) + ' '
            + (monthNames[date.getMonth()]) + ' '
            + date.getFullYear()
    },
    subjects(state) {
        return state.resultData.subjects
    },
    currSemBack(state) {
        return state.resultData.CURBACKL
    },
    totalBacks(state) {
        return state.resultData.TOTBACKL
    },
    spi(state) {
        return state.resultData.SPI
    },
    cpi(state) {
        return state.resultData.CPI
    },
    cgpa(state) {
        return state.resultData.CGPA
    }
}