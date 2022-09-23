
export default {
  computed: {
    RandomColors () {
      const nuitjour = new Date()
      const time = nuitjour.getHours()
      if (time > 8 && time < 20) {
        const colors = {
          '#979797': true,
          '#ff1e00': true,
          '#305b3f': true,
          '#99733A': true,
          '#5213c5': true

        }
        alert('il est ' + time + colors + 'h, ' + "c'est la nuit")
        return colors
      } else {
      // console.log('il est ' + time + colors + 'h, ' + "c'est la nuit")
      // document.documentElement.style.setProperty("--background-color", "white");
      // document.documentElement.style.setProperty("--font-color", "#ec79f8");
      // document.documentElement.style.setProperty("--selection", "green");
      // document.documentElement.style.setProperty("--shadow", "white");
      // document.documentElement.style.setProperty("--alt-text-color", "white");

        const colors = {
          white: true,
          '#6363FF': true,
          '#FFDB0F': true,
          '#728C97': true,
          '#FF751F': true
        }

        alert('il est ' + time + colors + 'h, ' + "c'est la nuit")
        return colors
      }
    }
  }
}
