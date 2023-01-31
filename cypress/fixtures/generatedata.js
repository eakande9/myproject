import {
    faker
} from '@faker-js/faker'

let selectVegetable = ['Brocolli', 'Cucumber', 'Beetroot', 'Cauliflower']


class generateData {

    randomNumber() {
        const num = faker.random.numeric();
        const mynumber = parseInt(num)
        return mynumber
    }




}
export default new generateData