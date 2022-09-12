

let input = [
    {
      source: 2,
      target: 6,
      name: 'Mike'
    },
    {
      source: 9,
      target: 1,
      name: 'Richard'
    },
    {
      source: 6,
      target: 3,
      name: 'Jon'
    },
    {
      source: 0,
      target: 5,
      name: 'Martin'
    },
  ]
  function excludePersonFromList(person, list) {
    list.forEach((el, i) => {
      if (el.name === person.name) {
        list.splice(i, 1)
        return
      }
    })
  }

  function getJoiners(floor, direction) {
    input.forEach(person => {
      let pDir = person.source > person.target ? -1: 1
      if (person.source === floor && pDir  === direction) {
        console.log(`${person.name} Stepped In..`)
        peopleInElev.push(person)
        excludePersonFromList(person, input)
      }
    })
  }
  
  function getDroppers(floor, priortizedPerson) {
    let priortizeFlag = false
    peopleInElev.forEach(person => {
      if (person.target === floor) {
        console.log(`${person.name} Dropped Off..`)
        excludePersonFromList(person, peopleInElev)
        if(priortizedPerson.name === person.name) {
          priortizeFlag = true
        }
      }
    })
    return priortizeFlag
  }
  
  let peopleInElev = []
  let from = 0
  let x = 0
  while (input.length > 0) {
    if (x == 4) break// dummy break to stop infinit loop
    let person = input[0]
    let direction = person.source > person.target ? -1 : 1
    let to = person.target
    for (let floor = from; floor != to + direction; floor += direction) {
      console.log(`We Are in Floor #${floor}`)
      getJoiners(floor, direction)
      if(getDroppers(floor, person)) {
        from = person.target
      }
    }
    x++
  }
