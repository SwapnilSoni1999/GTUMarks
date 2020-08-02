<template>
  <div class="jumbotron mysec">
    <div class="my_container">
      <div class="row justify-content-end justify-sm-content-end">
        <div class="col-3 text-right">
          <img src="http://gturesults.in/Images/logo.png" />
        </div>
        <div class="col-8 col-sm-9">
          <h1 class="head">Gujarat Technological University Ahmedabad</h1>
        </div>
      </div>

      <!-- Search Box  -->
        <SearchBox />
      <!-- Student Info Box  -->
        <StudentInfo />
      <!-- Mark Table -->
        <MarksTable />
      <!-- Result Table -->
        <ResultsTable />
    </div>
  </div>
</template>

<script>
import MarksTable from "~/components/MarksTable";
import SearchBox from "~/components/SearchBox";
import StudentInfo from "~/components/StudentInfo";
import ResultsTable from "~/components/ResultsTable";

export default {
  components: {
    SearchBox,
    StudentInfo,
    MarksTable,
    ResultsTable
  },
};
</script>

<style>
  .my_container {
    max-width: calc(100% - 3rem);
    margin: 0 auto;
  }
</style>