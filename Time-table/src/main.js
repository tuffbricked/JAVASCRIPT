import './style.css'

const timetableData = {
  days: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
  periods: ['1', '2', '3', 'BREAK', '4', '5', '6'],
  schedule: [
    ['UI/UX', 'DJF', '', 'BREAK', 'MATH', 'GD', ''],
    ['DJF', 'DJF prac', 'DJF prac', 'DJF prac', 'CL', 'VC Prac', ''],
    ['VC', 'BREAK', 'DGV', 'LUNCH', 'MATH', '', ''],
    ['U1/UX', '', 'DJF', 'BREAK', 'PHY', 'DJF/DJF prac', 'DJF/DJF prac'],
    ['DGV', 'FR', '', 'BREAK', '', '', '']
  ]
}

function createTimetable() {
  const app = document.getElementById('app')
  
  // Title
  const title = document.createElement('h1')
  title.textContent = 'L3SWDC'
  app.appendChild(title)
  
  // Container
  const container = document.createElement('div')
  container.className = 'container'
  app.appendChild(container)
  
  // Table
  const table = document.createElement('table')
  table.className = 'timetable'
  
  // Header
  const thead = document.createElement('thead')
  const headerRow = document.createElement('tr')
  
  const emptyTh = document.createElement('th')
  headerRow.appendChild(emptyTh)
  
  timetableData.periods.forEach(period => {
    const th = document.createElement('th')
    th.textContent = period
    headerRow.appendChild(th)
  })
  
  thead.appendChild(headerRow)
  table.appendChild(thead)
  
  // Body
  const tbody = document.createElement('tbody')
  
  timetableData.days.forEach((day, dayIndex) => {
    const row = document.createElement('tr')
    
    const dayTh = document.createElement('th')
    dayTh.textContent = day
    row.appendChild(dayTh)
    
    timetableData.schedule[dayIndex].forEach((subject, subjectIndex) => {
      const td = document.createElement('td')
      td.textContent = subject
      row.appendChild(td)
    })
    
    tbody.appendChild(row)
  })
  
  table.appendChild(tbody)
  container.appendChild(table)
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', createTimetable)
