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
              <input type="text" class="form-control student_data" value="Md Saban" disabled />
            </div>
            <!-- Exam Name -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Exam</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                value="BE SEM 6 - Regular (MAY 2020)"
                disabled
              />
            </div>
            <!-- Branch Name -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Branch</label>
              </div>
              <input
                type="text"
                class="form-control student_data"
                value="  INFORMATION TECHNOLOGY"
                disabled
              />
            </div>
          </div>
          <div class="col-sm-6">
            <!-- Enroll Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Enroll No.</label>
              </div>
              <input type="text" class="form-control student_data" value="123456789" disabled />
            </div>
            <!-- Seat Number -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Seat No.</label>
              </div>
              <input type="text" class="form-control student_data" value="seat1234" disabled />
            </div>
            <!-- Declare On -->
            <div class="input-group my-3">
              <div>
                <label class="input-group-text" for="session">Declared On</label>
              </div>
              <input type="text" class="form-control student_data" value="03 Jul 2020" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>