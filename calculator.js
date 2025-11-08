
      //display
      const display = document.getElementById("display"); //yahan per hamre numbers show honge
      function appendValue(value) {
        display.value += value;
      }

      //clear display
      function clearDisplay() {
        display.value = "";
      }

      //delete one
      function deleteOne() {
        display.value = display.value.slice(0, -1);
      }

      // equal
      function result() {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "error";
        }
      }