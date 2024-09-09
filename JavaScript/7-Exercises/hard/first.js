class Race {
  constructor(...racers) {
    this.racers = racers;
  }

  getClassification() {
    const classification = {};

    for (let i = 0; i < this.racers.length; i++) {
      classification[i + 1] = this.racers[i];
    }

    return classification;
  }

  updateClassification(str) {
    const [racer, action] = str.split(" ");

    if (action.includes("ELIMINATE")) {
      this.eliminateRacer(racer);
    } else {
      this.updateRacer(racer, action);
    }
  }

  updateRacer(racer, action) {
    const eleminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATED")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATED"));

    const currentPosition = active.indexOf(racer);
    const updatedPosition = currentPosition + Number(action) * -1;

    if (updatedPosition >= this.racers.length || updatedPosition < 0) {
      console.log("Erro! Atualização inválida.");
      return;
    }

    active.splice(currentPosition, 1);

    this.racers = [
      ...active.slice(0, updatedPosition),
      racer,
      ...active.slice(updatedPosition),
      ...eleminated,
    ];
  }

  eliminateRacer(racer) {
    const eleminated = this.racers.filter((racer) =>
      racer.includes("ELIMINATED")
    );
    const active = this.racers.filter((racer) => !racer.includes("ELIMINATED"));

    active.splice(active.indexOf(racer), 1);

    this.racers = [...active, `${racer} ELIMINATED`, ...eleminated];
  }
}
