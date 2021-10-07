function repeat(str: string, times: number): string {
  let repeated = '';
  for (let i = 1; i <= times; i++) {
    repeated += str;
  }

  return repeated;
}

export const htmlTemplate = `
<div class="simplepicker-wrapper">
  <div class="simpilepicker-date-picker">
    <div class="simplepicker-day-header"></div>
      <div class="simplepicker-date-section">
        <div class="simplepicker-month-and-year"></div>
        <div class="simplepicker-date"></div>
        <div class="simplepicker-select-pane">
          <button class="simplepicker-icon simplepicker-icon-calender active" title="Select date from calender!"></button>
          <div class="simplepicker-time">12:00 PM</div>
          <button class="simplepicker-icon simplepicker-icon-time" title="Select time"></button>
        </div>
      </div>
      <div class="simplepicker-picker-section">
        <div class="simplepicker-calender-section">
          <div class="simplepicker-month-switcher simplepicker-select-pane">
            <button class="simplepicker-icon simplepicker-icon-previous"></button>
            <div class="simplepicker-selected-date"></div>
            <button class="simplepicker-icon simplepicker-icon-next"></button>
          </div>
          <div class="simplepicker-calender">
            <table>
              <thead>
                <tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>
              </thead>
              <tbody>
                ${ repeat('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>', 6) }
              </tbody>
            </table>
          </div>
        </div>
        <div class="simplepicker-time-section">
          <input type="time" value="12:00" autofocus="false">
        </div>
      </div>
      <div class="simplepicker-bottom-part">
        <button class="simplepicker-cancel-btn simplepicker-btn" title="Cancel">Cancel</button>
        <button class="simplepicker-ok-btn simplepicker-btn" title="OK">OK</button>
      </div>
  </div>
</div>
`;
