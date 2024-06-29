const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limiti atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionando à tripulaç~~ao da ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name} já está em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`a nvae ${spaceship.name} não pode ser enviada, tripulação insuficiente`);
    }
    else {
        spaceship.inMission = true;
        alert(`A nave ${spaceship.name} foi enviada para a missão!`);
    }
}
