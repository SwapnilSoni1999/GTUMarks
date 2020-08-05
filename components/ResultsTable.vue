<template>
  <!-- Current Sem. Backlog: 0	Total Backlog: 5	SPI: 7.84	CPI: 6.30	CGPA: 6.74 -->
  <div class="row student_info mt-0" v-if="gotResult">
    <div class="col">
      <div class="box">
        <div class="row">
          <!-- Current Sem. Backlog -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="input-group my-2">
              <div>
                <label class="input-group-text">Current Semester Backlog</label>
              </div>
              <input type="text" class="form-control student_data" :value="currSemBack" disabled />
            </div>
          </div>
          <!-- Total Backlog -->
          <div class="col-6 col-sm-6 col-lg-3">
            <div class="input-group my-2">
              <div>
                <label class="input-group-text">Total Backlog</label>
              </div>
              <input type="text" class="form-control student_data" :value="totalBacks" disabled />
            </div>
          </div>
          <!-- SPI -->
          <div class="col-6 col-sm-4 col-lg-2">
            <div class="input-group my-2">
              <div>
                <label class="input-group-text">SPI</label>
              </div>
              <input type="text" class="form-control student_data" :value="spi" disabled />
            </div>
          </div>
          <!-- CPI -->
          <div class="col-6 col-sm-4 col-lg-2">
            <div class="input-group my-2">
              <div>
                <label class="input-group-text">CPI</label>
              </div>
              <input type="text" class="form-control student_data" :value="cpi" disabled />
            </div>
          </div>
          <!-- CGPA -->
          <div class="col-6 col-sm-4 col-lg-2">
            <div class="input-group my-2">
              <div>
                <label class="input-group-text">CGPA</label>
              </div>
              <input type="text" class="form-control student_data" :value="cgpa" disabled />
            </div>
          </div>
        </div>
        <div class="alert text-centerx" :class="passed ? 'alert-success' : 'alert-danger'" role="alert">{{ statusMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'infoBox',
  computed: {
    ...mapGetters({
      gotResult: "gotResult",
      currSemBack: "currSemBack",
      totalBacks: "totalBacks",
      spi: "spi",
      cpi: "cpi",
      cgpa: "cgpa",
      statusMsg: 'statusMsg',
      passed: 'passed'
    }),
  }
};
</script>

<style scoped>
.input-group-text {
  width: 7.5rem;
  justify-content: center;
  text-align: center;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.student_info .input-group {
  display: flex;
  flex-direction: column;
}

.student_info .input-group input {
  border: 1px solid #ccc;
  text-align: center;
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.student_info .input-group label {
  width: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
