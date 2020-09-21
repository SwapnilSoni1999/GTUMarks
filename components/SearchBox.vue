<template>
  <div class="row search_contain">
    <div class="col">
      <form @submit.prevent="onSubmit" class="search">
        <div style="margin: 0 auto; display:block;" v-if="showLoader" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <h2>
          <i class="fa fa-search" aria-hidden="true"></i> SEARCH RESULT :
        </h2>
        <!-- Session -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Session</label>
          </div>
          <select
            :disabled="!sessions.length"
            @change="loadBranch"
            class="custom-select"
            v-model="currSession"
            id="session"
          >
            <option selected value="1">Choose...</option>
            <option
              v-for="(sess, index) in sessions"
              :key="index"
              :value="sess.ExSession"
            >{{ sess.name }}</option>
          </select>
        </div>
        <!-- Branch -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="course">Course</label>
          </div>
          <select
            :disabled="!courses.length"
            @change="loadExam"
            class="custom-select"
            v-model="currCourse"
            id="course"
          >
            <option selected value="1">Choose...</option>
            <option
              v-for="(brch, index) in courses"
              :key="index"
              :value="brch.branchShort"
            >{{ brch.branchShort }} - {{ brch.branch }}</option>
          </select>
        </div>
        <!-- Exam -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="exams">Exam</label>
          </div>
          <select
            @change="checkExam"
            :disabled="!exams.length"
            class="custom-select"
            v-model="currExam"
            id="exams"
          >
            <option value="1" selected>Choose...</option>
            <option v-for="(exm, index) in exams" :key="index" :value="exm.examid">{{ exm.exam }}</option>
          </select>
        </div>
        <!-- Enrollment -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Enroll No.</label>
          </div>
          <input
            :disabled="allowedForEnr"
            type="text"
            v-model="enrollment"
            class="form-control"
            inputmode="numeric"
          />
        </div>
        <small v-if="showErr" class="d-block">
          <div class="alert alert-warning" role="alert">{{ errMsg }}</div>
        </small>

        <!-- <div class="text-center">Or</div> -->
        <!-- Seat Number -->
        <!-- <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Seat No.</label>
          </div>
          <input type="text" v-model="seatNum" class="form-control" />
        </div>-->
        <!-- Search Button -->
        <div class="text-center">
          <button type="submit" class="btn my_btn">
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    showLoader: true,
    sessions: [],
    currSession: "1",
    courses: [],
    currCourse: "1",
    exams: [],
    currExam: "1",
    enrollment: "",
    seatNum: "",
    showErr: false,
    errMsg: "Please choose valid option from dropdown.",
  }),
  async created() {
    if (process.client) {
      const res = await this.getSessions();
      for (let data of res.data) {
        let name = "";
        if (data.stype.toUpperCase() === "S") {
          name = "Summer ";
        } else if (data.stype.toUpperCase() === "W") {
          name = "Winter ";
        }
        name += data.exyear;
        data.name = name;
        this.sessions.push(data);
        this.showLoader = false
      }
    }
  },
  computed: {
    allowedForEnr() {
      if (
        this.currSession != "1" &&
        this.currCourse != "1" &&
        this.currExam != "1"
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions({
      getSessions: "getSessions",
      getCourses: "getCourses",
      getExams: "getExams",
      getResult: "getResult",
    }),
    resetVals() {
      this.currSession = "1"
      this.courses = []
      this.currCourse = "1"
      this.exams = []
      this.currExam = "1"
      this.enrollment = ""
      this.seatNum = ""
      this.showErr = false
    },
    async loadBranch() {
      this.currCourse = "1"
      this.currExam = "1"
      if (this.currSession == "1") {
        this.errMsg = "Please choose valid session!";
        this.showErr = true;
        return;
      }
      this.showErr = false;
      this.showLoader = true
      const res = await this.getCourses(this.currSession);
      this.courses = res.data;
      this.showLoader = false
    },
    async loadExam() {
      this.currExam = "1"
      if (this.currCourse == "1") {
        this.errMsg = "Please choose valid course!";
        this.showErr = true;
        return;
      }
      if (this.currSession == "1") {
        this.errMsg = "Please choose valid session!";
        this.showErr = true;
        return;
      }
      this.showErr = false;
      this.showLoader = true
      const res = await this.getExams({
        course: this.currCourse,
        sessionId: this.currSession,
      });
      this.exams = res.data;
      this.showLoader = false
    },
    async checkExam() {
      if (this.currExam == "1") {
        this.errMsg = "Please choose valid exam!";
        this.showErr = true;
        return;
      }
      this.showErr = false;
    },
    async onSubmit() {
      if (this.currSession == "1") {
        this.errMsg = "Please choose valid session!";
        this.showErr = true;
        return;
      }
      if (this.currCourse == "1") {
        this.errMsg = "Please choose valid course!";
        this.showErr = true;
        return;
      }
      if (this.currExam == "1") {
        this.errMsg = "Please choose valid exam!";
        this.showErr = true;
        return;
      }
      const isNum = /^\d+$/g.test(this.enrollment)
      
      if (!isNum) {
        this.errMsg = "Only digits are allowed for enrollment.";
        this.showErr = true;
        return
      }

      if (this.showErr) {
        this.errMsg = "Please check issues in your selection and then submit."
      }
      this.showErr = false;
      try {
        this.showLoader = true
        const res = await this.getResult({
          enrollment: this.enrollment,
          examid: this.currExam,
        });
        // reset the form
        this.resetVals()
        const el = this.$parent.$el.querySelector('.student_info')
        const rect = el.getBoundingClientRect()
        window.scrollTo(rect.left, rect.top + 10)
        this.showLoader = false
      } catch(err) {
        this.errMsg = err.response.data.message
        this.showErr = true
        this.showLoader = false
      }
    },
  },
};
</script>