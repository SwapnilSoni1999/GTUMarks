<template>
  <div v-if="gotResult" class="table_wrapper">
    <table class="table table-striped result_table">
      <thead>
        <tr>
          <th scope="col">SUBJECT CODE</th>
          <th scope="col">SUBJECT NAME</th>
          <th scope="col">ESE ABSENT</th>
          <th scope="col">
            <span class="shift-td">Theory Grade</span>
            <table>
              <tbody>
                <tr>
                  <td>ESE</td>
                  <td>PA</td>
                  <td>TOTAL</td>
                </tr>
              </tbody>
            </table>
          </th>
          <th scope="col">
            <span class="shift-td">Practical Grade</span>
            <table>
              <tbody>
                <tr>
                  <td>ESE</td>
                  <td>PA</td>
                  <td>TOTAL</td>
                </tr>
              </tbody>
            </table>
          </th>
          <th scope="col">Subject Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sub in subjects" :key="sub.sub">
          <th scope="row">{{ sub.sub }}</th>
          <td>{{ sub.subNA }}</td>
          <td>-</td>
          <td>
            <table class="child-shift-td">
              <tbody>
                <!-- theory grade -->
                <tr>
                  <td>{{ sub.subGRE ? sub.subGRE : "-" }}</td> <!-- ese -->
                  <td>{{ sub.subGRM ? sub.subGRM : "-" }}</td> <!-- pa -->
                  <td>{{ sub.subGRTH ? sub.subGRTH : "-" }}</td> <!-- total -->
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table class="child-shift-td">
              <tbody>
                <!-- practical grade -->
                <tr>
                  <td>{{ sub.subGRV ? sub.subGRV : "-" }}</td> <!-- ese -->
                  <td>{{ sub.subGRI ? sub.subGRI : "-" }}</td> <!-- pa -->
                  <td>{{ sub.subGRPR ? sub.subGRPR : "-" }}</td> <!-- total -->
                </tr>
              </tbody>
            </table>
          </td>
          <td>{{ sub.subGR }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* 
  Mapping

  (theory)
  subGRE = subject grade ESE
  subGRM = subject grade PA
  subGRTH = subject Grade Theory (total)

  (practical)
  subGRV = ssubject grade ESE
  subGRI = subject grade PA
  subGRPR = subject practical total 

  (final)
  subGR = total marks
*/

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      gotResult: 'gotResult',
      subjects: 'subjects'
    })
  }
}
</script>

<style scoped>
.table_wrapper table thead tr > th {
  vertical-align: middle;
}

.table_wrapper table tbody tr > * {
  vertical-align: middle;
}

table {
  text-align: center;
}

::-webkit-scrollbar:vertical {
  display: none;
}

.shift-td {
  display: block;
  margin-bottom: .5rem;
}

.shift-td + table {
  margin: 0 auto;
}

.child-shift-td {
  margin: 0 auto;
}

.child-shift-td td {
  padding-right: 1.5rem !important;
}
</style>