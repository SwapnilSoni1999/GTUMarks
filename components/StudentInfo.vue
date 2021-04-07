<template>
  <div class="row student_info" v-if="gotResult">
    <div class="col">
      <div class="box">
        <h2>Student Info :</h2>
        <div class="row">
          <div class="col-md-6">
            <!-- Student Name -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text">Name</label>
              </div>
              <input type="text" class="form-control student_data" :value="studentName" disabled />
            </div>
            <!-- Exam Name -->
            <div class="input-group mt-3 mb-md-3">
              <div>
                <label class="input-group-text">Exam</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                :value="studentExam"
                disabled
              />
            </div>
            <!-- Branch Name -->
            <div class="input-group mt-3 my-md-3">
              <div>
                <label class="input-group-text">Branch</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                :value="studentBranch"
                disabled
              />
            </div>
          </div>
          <div class="col-md-6">
            <!-- Enroll Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text">Enroll No.</label>
              </div>
              <input type="text" class="form-control student_data" :value="enrollment" disabled />
            </div>
            <!-- Seat Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text">Seat No.</label>
              </div>
              <input type="text" class="form-control student_data" :value="seatNo" disabled />
            </div>
            <!-- Declare On -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text">Declared On</label>
              </div>
              <input type="text" class="form-control student_data" :value="declareDate" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      studentName: 'studentName',
      studentExam: 'studentExam',
      studentBranch: 'studentBranch',
      enrollment: 'enrollment',
      seatNo: 'seatNo',
      declared: 'declared',
      gotResult: 'gotResult'
    }),
    declareDate() {
      return this.declared
    }
  }
}
</script>

<style scoped>
  .input-group-text {
    width: 6.9rem;
    justify-content: center;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .student_info .input-group input {
    border: 1px solid #ccc;
  } 
</style>