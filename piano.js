
    const context = new AudioContext();

    function jsNota(frecuencia) {
      let o = context.createOscillator();
      g = context.createGain();
      o.connect(g);
      o.type = "sawtooth";
      o.frequency.value = frecuencia;
      g.connect(context.destination);
      o.start(0);
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5);
    }
    
    document.addEventListener("keydown", function(event) {
      switch (event.key) {
        case "b":
          jsNota(246.94);
          break;
        case "a":
          jsNota(220);
          break;
        case "g":
          jsNota(196);
          break;
        case "f":
          jsNota(174.61);
          break;
        case "e":
          jsNota(164.81);
          break;
        case "d":
          jsNota(146.83);
          break;
        case "c":
          jsNota(130.81);
          break;
        default:
          break;
      }
    });
    
    document.querySelectorAll(".white-key").forEach(key => {
      key.addEventListener("click", function() {
        switch (key.id) {
          case "b":
            jsNota(246.94);
            break;
          case "a":
            jsNota(220);
            break;
          case "g":
            jsNota(196);
            break;
          case "f":
            jsNota(174.61);
            break;
          case "e":
            jsNota(164.81);
            break;
          case "d":
            jsNota(146.83);
            break;
          case "c":
            jsNota(130.81);
            break;
          default:
            break;
        }
      });
    });
    
    document.querySelectorAll(".black-key").forEach(key => {
      key.addEventListener("click", function() {
        switch (key.id) {
          case "as":
            jsNota(233.08);
            break;
          case "gs":
            jsNota(207.65);
            break;
          case "fs":
            jsNota(185);
            break;
          case "ds":
            jsNota(138.59);
            break;
          case "cs":
            jsNota(123.47);
            break;
          default:
            break;
        }
      });
    });
    