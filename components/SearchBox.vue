<template>
  <div class="row search_contain">
    <div class="col">
      <form @submit.prevent="onSubmit" class="search">
        <h2>
          <i class="fa fa-search" aria-hidden="true"></i> SEARCH RESULT :
        </h2>
        <!-- Session -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="session">Session</label>
          </div>
          <select @change="loadBranch" class="custom-select" v-model="currSession" id="session">
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
          <select @change="loadExam" class="custom-select" v-model="currCourse" id="course">
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
          <select class="custom-select" v-model="currExam" id="exams">
            <option value="1" selected>Choose...</option>
            <option
              v-for="(exm, index) in exams"
              :key="index"
              :value="exm.examid"
            >{{ exm.exam }}</option>
          </select>
        </div>
        <!-- Enrollment -->
        <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Enroll No.</label>
          </div>
          <input type="text" v-model="enrollment" class="form-control" inputmode="numeric" />
        </div>
        <!-- <div class="text-center">Or</div> -->
        <!-- Seat Number -->
        <!-- <div class="input-group my-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Seat No.</label>
          </div>
          <input type="text" v-model="seatNum" class="form-control" />
        </div> -->
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
    sessions: [],
    currSession: "1",
    courses: [],
    currCourse: "1",
    exams: [],
    currExam: "1",
    enrollment: '',
    seatNum: ''
  }),
  async created() {
    if (process.client) {
      const res = await this.getSessions();
      for (let data of res.data) {
        let name = ""
        if (data.stype.toUpperCase() === 'S') {
          name = "Summer "
        } else if (data.stype.toUpperCase() === 'W') {
          name = "Winter "
        }
        name += data.exyear
        data.name = name
        this.sessions.push(data);
      }
      console.log(this.sessions)
    }
  },
  methods: {
    ...mapActions({
      getSessions: "getSessions",
      getCourses: "getCourses",
      getExams: "getExams",
      getResult: "getResult"
    }),
    async loadBranch() {
      const res = await this.getCourses(this.currSession)
      console.log(res.data)
      this.courses = res.data
    },
    async loadExam() {
      const res = await this.getExams({ course: this.currCourse, sessionId: this.currSession })
      this.exams = res.data
      console.log(res.data)
    },
    async onSubmit() {
      const res = await this.getResult({ enrollment: this.enrollment, examid: this.currExam })
    }
  },
};
</script>