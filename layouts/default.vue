<template>
  <div>
    <div class="notice">This is not the official website of GTU. It is our sincere effort to help you.</div>
    <Nuxt />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;              /* width of the entire scrollbar */
}
::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}
::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 10px;       /* roundness of the scroll thumb */
  border: 1px solid gray;  /* creates padding around scroll thumb */
}

.form-control:focus {
  box-shadow: 0 0 2px 2px #5f5d5d75;
  border: none;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1240px;
  }
}
/** First Sec **/

.mysec {
  padding: 20px 0;
  background: #fff;
  position: relative;
}
.mysec .row {
  align-items: center;
}
.mysec .head {
  text-align: left;
  font-weight: 800;
  color: #271572;
  font-size: 32px;
}
.search_contain {
  margin-top: 60px;
}
.search {
  max-width: 600px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 10px 20px -4px rgba(0, 0, 0, 0.25);
  padding: 25px;
  display: block;
  margin: 0 auto;
}
.search h2 {
  font-size: 18px;
  font-weight: 900;
}
.search .input-group-text {
  min-width: 100px;
}
.search .my_btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  background: #bb3026;
  color: #fff;
}

/*Student Info*/
.student_info {
  margin-top: 60px;
}
.student_info .box {
  border-radius: 10px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.25);
  padding: 25px;
}
.student_info h2 {
  font-size: 18px;
  font-weight: 900;
}
.student_info .student_data {
  background: #fff;
  border: none;
}

.table_wrapper {
  margin: 60px 0 30px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow-y: scroll;
}
.result_table th,
.result_table td {
  border-top: 0;
}
.result_table td > table td,
.result_table th > table td {
  border: none;
  padding: 0 0.75rem !important;
}
.result_table td > table tr,
.result_table th > table tr {
  background-color: transparent !important;
}

.notice {
  width: 100%;
  text-align: center;
  background-color: #e1e1e1;
  border-bottom: 4px #f1f1f1 solid;
  font-size: 0.8rem;
}
</style>
