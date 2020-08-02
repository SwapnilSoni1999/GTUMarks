<template>
  <div class="row student_info">
    <div class="col">
      <div class="box">
        <h2>Student Info :</h2>
        <div class="row">
          <div class="col-sm-6">
            <!-- Student Name -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Name</label>
              </div>
              <input type="text" class="form-control student_data" :value="studentName" disabled />
            </div>
            <!-- Exam Name -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Exam</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                :value="studentExam"
                disabled
              />
            </div>
            <!-- Branch Name -->
            <!-- <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Branch</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                :value="studentBranch"
                disabled
              />
            </div> -->
          </div>
          <div class="col-sm-6">
            <!-- Enroll Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Enroll No.</label>
              </div>
              <input type="text" class="form-control student_data" :value="enrollment" disabled />
            </div>
            <!-- Seat Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Seat No.</label>
              </div>
              <input type="text" class="form-control student_data" :value="seatNo" disabled />
            </div>
            <!-- Declare On -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Declared On</label>
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
      declared: 'declared'
    }),
    declareDate() {
      return this.declared
    }
  }
}
</script>