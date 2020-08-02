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
        <tr>
          <th scope="row">2160001</th>
          <td>Software Engineering</td>
          <td>-</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>AA</td>
        </tr>

        <tr>
          <th scope="row">2160001</th>
          <td>Software Engineering</td>
          <td>-</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>AA</td>
        </tr>

        <tr>
          <th scope="row">2160001</th>
          <td>Software Engineering</td>
          <td>-</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>BC</td>
                  <td>AB</td>
                  <td>BB</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>AA</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      gotResult: 'gotResult'
    })
  }
}
</script>

<style scoped>
table {
  text-align: center;
}

::-webkit-scrollbar:vertical {
  display: none;
}

@media (min-width: 1200px){
  .shift-td {
    display: block;
    padding-right: 20%;
  }
}
</style>