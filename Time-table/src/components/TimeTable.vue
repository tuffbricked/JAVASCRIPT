<template>
  <div class="container">
    <h1>L3SWDC</h1>
    <table class="timetable">
      <thead>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>BREAK</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Mo</th>
          <td>LINUX</td>
          <td>DJF</td>
          <td></td>
          <td>BREAK</td>
          <td>MATH</td>
          <td>GD</td>
          <td></td>
        </tr>
        <tr>
          <th>Tu</th>
          <td>DJF</td>
          <td colspan="3" style="border-right: 2px solid #999;">DJF prac</td>
          <td>CL</td>
          <td>VC Prac</td>
          <td></td>
        </tr>
        <tr>
          <th>We</th>
          <td>VC</td>
          <td>BREAK</td>
          <td>DGV</td>
          <td>LUNCH</td>
          <td>MATH</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <th>Th</th>
          <td>U1/UX</td>
          <td></td>
          <td>DJF</td>
          <td>BREAK</td>
          <td>PHY</td>
          <td colspan="2" style="border-right: 2px solid #999;">DJF/DJF prac</td>
        </tr>
        <tr>
          <th>Fr</th>
          <td>DGV</td>
          <td>FR</td>
          <td></td>
          <td>BREAK</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--text-h);
  font-weight: bold;
}

.timetable {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #333;
  font-size: 14px;
}

.timetable th,
.timetable td {
  border: 1px solid #999;
  padding: 15px;
  text-align: center;
  font-weight: 500;
}

.timetable thead th {
  background-color: #e0e0e0;
  color: #333;
  font-weight: bold;
}

.timetable tbody th {
  background-color: #f5f5f5;
  font-weight: bold;
  width: 50px;
}

.timetable tbody td {
  background-color: #fff;
  min-height: 60px;
  vertical-align: middle;
}

.timetable tbody tr:nth-child(even) td {
  background-color: #fafafa;
}
</style>
