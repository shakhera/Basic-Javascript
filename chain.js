const user = [
    {
        id: 101,
        name: 'shifa',
        job: 'bekar'
    }
]
const userResult = user[0].name;
// console.log(userResult);

const data = {
    id: 10001,
    count: 500,
    data: [
        { id: 1, name: 'shila', job: 'leader' },
        { id: 2, name: 'khan', job: 'bekar' }
    ]
}
const dataResult = data.data[1];
// console.log(dataResult)

const public = {
    id: 18033,
    name: 'shakhera',
    address: {
        street: {
            first: '35/A ... lane',
            second: 'secoond floor',
            third: 'right side'
        }
    }
}
const publicResult = public.address?.streat?.third;
console.log(publicResult)