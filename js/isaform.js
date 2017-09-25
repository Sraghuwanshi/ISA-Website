
//.....................For Registration Form Start...............................//
//Function To Display Popup
function div_show() {

    document.getElementById('abc').style.display = "block";
    document.getElementById('bg').style.display = "none";
    document.getElementById('popup').style.visibility = "hidden";
}
//Function to Hide Popup
function div_hide() {

    document.getElementById('abc').style.display = "none";
    document.getElementById('bg').style.display = "block";
    document.getElementById('popup').style.visibility = "visible";
}
//.....................For Registration Form Start..............................//

//.....................For DOB Date Picker Start.................................//
$(function () {

    var bindDatePicker = function () {
        $("#datepicker").datetimepicker({
            format: 'YYYY-MM-DD',
            autoclose: true,
            todayBtn: true,
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        }).find('input:first').on("blur", function () {
            // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
            // update the format if it's yyyy-mm-dd
            var date = parseDate($(this).val());

            if (!isValidDate(date)) {
                //create date based on momentjs (we have that)
                date = moment().format('YYYY-MM-DD');
            }

            $(this).val(date);
        });
    }

    var isValidDate = function (value, format) {
        format = format || false;
        // lets parse the date to the best of our knowledge
        if (format) {
            value = parseDate(value);
        }

        var timestamp = Date.parse(value);

        return isNaN(timestamp) == false;
    }

    var parseDate = function (value) {
        var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
        if (m)
            value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

        return value;
    }

    bindDatePicker();

});
//.....................For DOB Date Picker End.................................//
