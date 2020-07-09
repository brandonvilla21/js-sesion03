/**
 * 
 * NOTA: todas las funciones creadas deberán tener un return devolviendo el resultado esperado
 *
  1.Declara un objeto utilizando los estándres de ES6
    El objeto debe contener las siguientes caracteristicas:
   - numero de cuenta = account
   - datos de beneficiario (nombre y apellido) = name y lastName
   - saldo adeudo = amount

  2.Crear un arreglo de objetos con las mismas propiedades que el primero
    La idea es crear una lista (arreglo) de objetos con la informacion de 
    las cuentas que tienen un adeudo

  3.Realizar las siguientes funciones:
    3.1 Crear una arrow function para obtener la suma total de los adeudos de todos los registros de la lista
    3.2 Crear una arrow function para obtener el adeudo total de una cuenta en específico
    3.3 Crear una arrow function para verificar por nombre de usuario, si tiene un adeudo
    
    3.4 (De tarea) Obtener la cuenta con mas registros de adeudos (Pero NO más saldo en total.)

  4. Realizar las siguientes funciones para obtener una nueva lista con base en la lista inicial:
    4.1 Obtener una nueva lista conteniendo unicamente los adeudos mayores a 1000 pesos
    4.1.1 (De tarea) Obtener una nueva lista conteniendo unicamente los adeudos mayores a n pesos
    4.2 Crear una segunda lista con diferentes registros y a traves de una función, fusionarlas en un nuevo arreglo
    4.3 (De tarea) A traves de una función, fusionar n listas en un nuevo arreglo
    4.3.1 (De tarea) A traves de una función, fusionar n listas en un nuevo arreglo
    4.4 (De tarea)Crear una función para obtener una nueva lista con un registro unico para cada adeudo en la lista
        (puede ser un numero incremental)
    4.5 (De tarea)Crear una función para obtener una nueva lista con el IVA de cada adeudo en la lista
 */



// 1. account
const account = {
  accountId: '2000',
  user: {
    name: 'Juan',
    lastName: 'Perez'
  },
  amount: 1000.00
}

// 2.
const debtList = [
  {
    accountId: '200',
    user: {
      name: 'Juan',
      lastName: 'Perez'
    },
    amount: 1000.00
  },
  {
    accountId: '100',
    user: {
      name: 'Pedro',
      lastName: 'Villa'
    },
    amount: 500.00
  },
  {
    accountId: '300',
    user: {
      name: 'Ana',
      lastName: 'Gonzalez'
    },
    amount: 600.00
  },
  {
    accountId: '200',
    user: {
      name: 'Juan',
      lastName: 'Perez'
    },
    amount: 1500.00
  },
  {
    accountId: '100',
    user: {
      name: 'Pedro',
      lastName: 'Villa'
    },
    amount: 120.00
  },
  
]

const getAmount = (list) => {
  let sum = 0
  for(let i = 0; i < list.length; i++) {
    sum = list[i].amount + sum
  }
  return sum
}

// console.log(getAmount(debtList))

// 3.2 Crear una arrow function para obtener el adeudo total de una cuenta en específico
const getAmountByAccountId = (list, id) => {
  let sum = 0

  for(let i = 0; i < list.length; i++) {
    if (list[i].accountId == id) {
      sum = list[i].amount + sum
    }
  }
  return sum
}

// console.log(getAmountByAccountId(debtList, '100'))

// 3.3 Crear una arrow function para verificar por nombre de usuario, si tiene un adeudo
// Una funcion que retorne un valor booleano

const userHasDebt = (list, name) => {
  for(let i = 0; i < list.length; i++) {
    if (list[i].user.name == name) {
      return true
    }
  }
  return false
}

//console.log(userHasDebt(debtList, 'Ale'))

// 4.1 Obtener una nueva lista conteniendo unicamente los adeudos mayores a 500 pesos
const getDebtsGreaterThan500 = (list) => {
  const amounts = []
  for(let i = 0; i < list.length; i++) {
    if (list[i].amount > 500) {
      amounts.push(list[i].amount)
    }
  }
  return amounts
}

//console.log(getDebtsGreaterThan500(debtList))

// 4.3 A traves de una función, fusionar 2 listas en un nuevo arreglo
const mergeTwoLists = (list1, list2) => {
  const newList = [...list1, ...list2]
  return newList
}

const debtList2 = [
  {
    accountId: '500',
    user: {
      name: 'Ale',
      lastName: 'Gonzales'
    },
    amount: 2800.00
  },
]

console.log(mergeTwoLists(debtList, debtList2))

// A traves de una función, fusionar n listas en un nuevo arreglo
const mergeTwoLists = (...lists) => {
  // return lists
}


// Este es un cambio