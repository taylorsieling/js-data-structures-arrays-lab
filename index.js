const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    console.log(drivers.push(name));
  }

function destructivelyPrependDriver(name) {
    console.log(drivers.unshift(name));
}

function destructivelyRemoveLastDriver() {
    console.log(drivers.pop())
}

function destructivelyRemoveFirstDriver() {
    console.log(drivers.shift())
}

function appendDriver(name) {
    const newDrivers = [...drivers, name]
    return newDrivers
}

function prependDriver(name) {
    const newDrivers = [name, ...drivers]
    return newDrivers
}

function removeLastDriver() {
    const newDrivers = drivers.slice(0, drivers.length - 1)
    return newDrivers
}

function removeFirstDriver() {
    const newDrivers = drivers.slice(1)
    return newDrivers
}