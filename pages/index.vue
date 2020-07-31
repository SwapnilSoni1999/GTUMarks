<template>
  <div class="jumbotron mysec">
    <div class="container">
      <div class="row">
        <div class="col-3 text-right">
          <img src="http://gturesults.in/Images/logo.png" />
        </div>
        <div class="col-9">
          <h1 class="head">Gujarat Technological University Ahmedabad</h1>
        </div>
      </div>

      <!-- Search Box  -->
        <SearchBox />
      <!-- Student Info Box  -->
        <StudentInfo />
      <!-- Result Table -->
        <MarksTable />
    </div>
  </div>
</template>

<script>
import MarksTable from "~/components/MarksTable";
import SearchBox from "~/components/SearchBox";
import StudentInfo from "~/components/StudentInfo";

export default {
  components: {
    SearchBox,
    StudentInfo,
    MarksTable,
  },
};
</script>