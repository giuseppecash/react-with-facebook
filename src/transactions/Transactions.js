import TransactionDetails from "./TransactionDetails"
import TransactionEmpty from "./TransactionEmpty"



const Transactions = () => {

    const allTransactions = [
        {
            "amount": 1000.000000000000000000,
            "action": 2,
            "creationDate": "2022-03-02T14:13:33.97",
            "name": "Test2",
            "savingsType": 2,
            "customerName": "Rosh Abayomi",
            "id": "b483b3f3-03a4-45d1-97dd-8ac06bd5ec4c",
            "lastModifiedDate": "2022-03-02T14:13:33.97"
        },
        {
            "amount": 20000.000000000000000000,
            "action": 2,
            "creationDate": "2022-03-02T14:12:38.88",
            "name": "Testr",
            "savingsType": 2,
            "customerName": "Rosh Abayomi",
            "id": "d34fc293-0f2d-45a8-b9c5-c8a9ed96b9b9",
            "lastModifiedDate": "2022-03-02T14:12:38.88"
        },
        {
            "amount": 500.000000000000000000,
            "action": 2,
            "creationDate": "2022-02-20T18:05:08.7833333",
            "name": "Testing Personal Target",
            "savingsType": 1,
            "customerName": "Rosh Abayomi",
            "id": "8763cd26-3426-4d21-bb54-ae513b05166a",
            "lastModifiedDate": "2022-02-20T18:05:08.7833333"
        },
        {
            "amount": 500.000000000000000000,
            "action": 2,
            "creationDate": "2022-02-20T18:02:56",
            "name": "Testing Personal Target",
            "savingsType": 1,
            "customerName": "Rosh Abayomi",
            "id": "7ad406f0-29e7-4cba-8387-997a5c3dc65a",
            "lastModifiedDate": "2022-02-20T18:02:56.0366667"
        },
        {
            "amount": 500.000000000000000000,
            "action": 2,
            "creationDate": "2022-02-20T18:02:01.7966667",
            "name": "Testing Personal Target",
            "savingsType": 1,
            "customerName": "Rosh Abayomi",
            "id": "03d97cf8-2b8f-4083-bdde-0b8ece2be01e",
            "lastModifiedDate": "2022-02-20T18:02:01.7966667"
        },
        {
            "amount": 500.000000000000000000,
            "action": 2,
            "creationDate": "2022-02-20T17:58:03.18",
            "name": "Testing Personal Target",
            "savingsType": 1,
            "customerName": "Rosh Abayomi",
            "id": "85350527-11f0-4e1a-99fc-0a6b64967991",
            "lastModifiedDate": "2022-02-20T17:58:03.18"
        },
        {
            "amount": 500.000000000000000000,
            "action": 2,
            "creationDate": "2022-02-20T17:44:16.7966667",
            "name": "Testing Personal Target",
            "savingsType": 1,
            "customerName": "Rosh Abayomi",
            "id": "ed6e4533-480b-4e3c-bd32-9329e5c63dff",
            "lastModifiedDate": "2022-02-20T17:44:16.7966667"
        },
        {
            "amount": 2000.000000000000000001,
            "action": 1,
            "creationDate": "2021-02-26T00:00:10.4866667",
            "name": "TestChallengeCheck",
            "savingsType": 5,
            "customerName": "Rosh Abayomi",
            "id": "000a772c-d274-4dbd-a8c0-2a3c89efbd90",
            "lastModifiedDate": "2021-02-26T00:00:10.4866667"
        },
        {
            "amount": 1.369863013698630138,
            "action": 1,
            "creationDate": "2021-02-26T00:00:10.4833333",
            "name": "TestChallengeCheck",
            "savingsType": 5,
            "customerName": "Rosh Abayomi",
            "id": "3c9f9464-b058-4400-92c8-0e7752cb31ac",
            "lastModifiedDate": "2021-02-26T00:00:10.4833333"
        },
        {
            "amount": 666.666666666666666667,
            "action": 2,
            "creationDate": "2021-02-25T00:00:04.24",
            "name": "TestChallengeCheck",
            "savingsType": 5,
            "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
            "customerName": "Rosh Abayomi",
            "id": "e6f3eb87-05a6-4e1d-967c-3dc8aa7f7c57",
            "lastModifiedDate": "2021-02-25T00:00:04.24"
        },
        {
            "amount": 666.666666666666666667,
            "action": 2,
            "creationDate": "2021-02-24T00:17:32.63",
            "name": "TestChallengeCheck",
            "savingsType": 5,
            "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
            "customerName": "Rosh Abayomi",
            "id": "aa890ed7-e012-480d-b99e-f0140f1e2791",
            "lastModifiedDate": "2021-02-24T00:17:32.63"
        },
        {
            "amount": 833.333333333333333333,
            "action": 2,
            "creationDate": "2021-02-24T00:06:10.86",
            "name": "CheckTargetTest",
            "savingsType": 4,
            "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
            "customerName": "Rosh Abayomi",
            "id": "8fde239e-41e3-4ca5-b530-16cf0c7d8007",
            "lastModifiedDate": "2021-02-24T00:06:10.86"
        },
        {
            "amount": 1666.666666666666666667,
            "action": 2,
            "creationDate": "2021-02-23T23:45:59.6966667",
            "name": "GroupTargetTest2",
            "savingsType": 4,
            "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
            "customerName": "Rosh Abayomi",
            "id": "0e74cbfa-a084-4822-9f56-86b66e3a09f5",
            "lastModifiedDate": "2021-02-23T23:45:59.6966667"
        },
        {
            "amount": 666.666666666666666667,
            "action": 2,
            "creationDate": "2021-02-23T23:19:35.11",
            "name": "TestChallengeCheck",
            "savingsType": 5,
            "customerProfilePicture": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-profilepicture/bf7c567f-32fa-4575-8076-adf53b06306a.jpeg",
            "customerName": "Rosh Abayomi",
            "id": "038684a3-cc3d-40f9-b57b-beb11ff6953a",
            "lastModifiedDate": "2021-02-23T23:19:35.11"
        }
    ]
    return(
        <div>
                {
                   (allTransactions.length > 0) ? allTransactions.map(allTransaction => <TransactionDetails key={allTransaction.id} name={allTransaction} />) : <TransactionEmpty create="Create new savings"/>
                }
        </div>
    )
}

export default Transactions