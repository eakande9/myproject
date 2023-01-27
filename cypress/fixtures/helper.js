class helper {
    clickMultipleTimes(number, button) {
        for (var i = 0; i < number; i++) {
            button.click()
        }
    }
}
export default new helper