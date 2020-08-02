<template>
  <!-- Current Sem. Backlog: 0	Total Backlog: 5	SPI: 7.84	CPI: 6.30	CGPA: 6.74 -->
  <div class="row student_info mt-0" v-if="gotResult">
    <div class="col">
      <div class="box">
        <div class="row">
          <div class="col-md-12">
            <!-- Current Sem. Backlog -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text w-100" for="session">Current Semester Backlog</label>
              </div>
              <input type="text" class="form-control student_data" :value="currSemBack" disabled />
            </div>
          </div>
          <div class="col-6">
            <!-- Total Backlog -->
            <div class="input-group mt-3 mb-md-3">
              <div>
                <label class="input-group-text" for="session">Total Backlog</label>
              </div>
              <input type="text" class="form-control student_data" :value="totalBacks" disabled />
            </div>
            <!-- SPI -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">SPI</label>
              </div>
              <input type="text" class="form-control student_data" :value="spi" disabled />
            </div>
          </div>
          <div class="col-6">
            <!-- CPI -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">CPI</label>
              </div>
              <input type="text" class="form-control student_data" :value="cpi" disabled />
            </div>
            <!-- CGPA -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">CGPA</label>
              </div>
              <input type="text" class="form-control student_data" :value="cgpa" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      gotResult: "gotResult",
      currSemBack: "currSemBack",
      totalBacks: "totalBacks",
      spi: "spi",
      cpi: "cpi",
      cgpa: "cgpa"
    }),
  },
};
</script>

<style scoped>
.input-group-text {
  width: 7.5rem; /* inherited */
  justify-content: center;
  text-align: center;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.student_info .input-group input {
    min-width: 7.5rem; /* inherited */
}

.student_info .input-group input {
    border: 1px solid #ccc;
    text-align: center;
}


@media (max-width: 610px) {
  .student_info .input-group {
    display: flex;
    flex-direction: column;
  }

  .student_info .input-group label {
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    white-space: normal;
  }

  .student_info .input-group input {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>