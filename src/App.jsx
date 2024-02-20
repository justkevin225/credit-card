/* eslint-disable react/no-unescaped-entities */
import { Tilt } from "react-tilt";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import TextScramble from "@skits/react-text-scramble";
import Button from "@mui/material/Button";
import { BarLoader } from "react-spinners";

const App = () => {
  const [cardOwner, setCardOwner] = useState("");
  const [cardOwnerDisplayed, setCardOwnerDisplayed] =
    useState("##### ########");
  const [cardNumber, setCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [CVVDisplayed, setCVVDisplayed] = useState("###");
  const [month, setMonth] = useState("");
  const [monthDisplayed, setMonthDisplayed] = useState("##");
  const [year, setYear] = useState("");
  const [yearDisplayed, setYearDisplayed] = useState("##");
  const [isLoading, setIsLoading] = useState(true);

  const handleCardNumberChange = (e) => {
    // Supprimer tous les caractères non numériques
    let value = e.currentTarget.value.replace(/\D/g, "");
    // Limiter la saisie à 16 caractères
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    // Ajouter des espaces après chaque groupe de 4 chiffres
    const formattedValue = value.replace(/(\d{4})/g, "$1  ").trim();
    // Mettre à jour la valeur du champ
    setCardNumber(formattedValue);
    // Vérifier si la touche "Backspace" a été pressée
    if (
      e.nativeEvent.inputType === "insertText" &&
      /\d/g.test(e.nativeEvent.data)
    ) {
      // Créez une instance de l'objet Audio avec le chemin vers votre fichier sonore
      const audio = new Audio("/noises/beep.mp3");
      // Jouez le son
      audio.play();
    }
  };

  const handleCVVChange = (e) => {
    // Supprimer tous les caractères non numériques
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setCVV(value);
  };
  const handleMonthChange = (e) => {
    // Supprimer tous les caractères non numériques
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setMonth(value);
  };
  const handleYearChange = (e) => {
    // Supprimer tous les caractères non numériques
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setYear(value);
  };

  const handleCardOwnerBlur = (e) => {
    if (
      e.currentTarget.value !== cardOwnerDisplayed &&
      e.currentTarget.value !== ""
    ) {
      const audio = new Audio("/noises/data-beep.mp3");
      audio.play();
    }
    setCardOwnerDisplayed(e.currentTarget.value);
  };
  const handleCVVBlur = (e) => {
    if (
      e.currentTarget.value !== CVVDisplayed &&
      e.currentTarget.value !== ""
    ) {
      const audio = new Audio("/noises/data-beep.mp3");
      audio.play();
    }
    setCVVDisplayed(e.currentTarget.value);
  };
  const handleMonthBlur = (e) => {
    if (
      e.currentTarget.value !== monthDisplayed &&
      e.currentTarget.value !== ""
    ) {
      const audio = new Audio("/noises/data-beep.mp3");
      audio.play();
    }
    setMonthDisplayed(e.currentTarget.value);
  };
  const handleYearBlur = (e) => {
    if (
      e.currentTarget.value !== yearDisplayed &&
      e.currentTarget.value !== ""
    ) {
      const audio = new Audio("/noises/data-beep.mp3");
      audio.play();
    }
    setYearDisplayed(e.currentTarget.value);
  };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <div className="h-screen w-screen bg-black">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 flex items-center justify-center flex-col">
            <BarLoader color="#fff" />
            <div className="text-white">Un instant...</div>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white font-[Kanit] p-5">
          {/* HEADER  */}
          <header className="flex justify-center">
            <img
              src="images/mon logo - fond noir.png"
              alt="mon logo"
              className="w-24"
            />
          </header>
          {/* MAIN  */}
          <main>
            <div>
              <div>
                {/* card  */}
                <Tilt
                  options={defaultOptions}
                  className="cursor-grab w-[95%] xs:w-[350px] mx-auto"
                >
                  <div className="translate-y-5 bg-white/10 backdrop-blur-sm rounded-md p-5 border-[1px] border-white ">
                    <div className="flex justify-between items-center">
                      <div className="italic">KEV's BANK</div>
                      <div>
                        <img
                          src="images/visa.png"
                          alt="logo visa"
                          className="w-16"
                        />
                      </div>
                    </div>

                    {/* chip and wireless 5*/}
                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          src="images/chip.png"
                          alt="chip logo"
                          className="w-12"
                        />
                      </div>
                      <div>
                        <img
                          src="images/wireless.png"
                          alt="chip logo"
                          className="w-5"
                        />
                      </div>
                    </div>

                    {/* card number  */}
                    <label
                      htmlFor="cardNumber"
                      className="relative flex justify-center gap-5 my-3 h-6 overflow-hidden cursor-pointer"
                    >
                      <div className="flex">
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[0] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[0] ? cardNumber[0] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[1] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[1] ? cardNumber[1] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[2] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[2] ? cardNumber[2] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[3] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[3] ? cardNumber[3] : "#"}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[6] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[6] ? cardNumber[6] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[7] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[7] ? cardNumber[7] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[8] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[8] ? cardNumber[8] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[9] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[9] ? cardNumber[9] : "#"}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[12] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[12] ? cardNumber[12] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[13] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[13] ? cardNumber[13] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[14] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[14] ? cardNumber[14] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[15] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[15] ? cardNumber[15] : "#"}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[18] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[18] ? cardNumber[18] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[19] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[19] ? cardNumber[19] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[20] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[20] ? cardNumber[20] : "#"}</span>
                        </div>
                        <div
                          className={`flex flex-col trasition-all duration-300 ${
                            cardNumber[21] && "-translate-y-full"
                          }`}
                        >
                          <span>#</span>
                          <span>{cardNumber[21] ? cardNumber[21] : "#"}</span>
                        </div>
                      </div>
                    </label>

                    <div className="flex items-center justify-between">
                      {/* owner */}
                      <div className="flex flex-col">
                        <span className="font-light text-xs">Owner</span>
                        <label
                          htmlFor="cardOwner"
                          className="font-semibold text-sm cursor-pointer"
                        >
                          <TextScramble
                            text={
                              cardOwnerDisplayed === ""
                                ? "##### ########"
                                : cardOwnerDisplayed
                            }
                            autostart
                            wrappingElement="p" // Wraps the provided text in 'p' tags - <p>{text}</p>
                            characters="AZERTYUIOPQSDFGHJKLMWXCVBN" // Scramble text using numbers only
                            speed={50}
                            delay={100}
                            revealText
                            revealSpeed={50}
                            revealMode="typewriter" // Reveal text from left to right
                          />
                        </label>
                      </div>

                      <div className="flex gap-3">
                        {/* CVV */}
                        <div className="flex flex-col">
                          <span className="font-light text-xs">CVV</span>
                          <span className="font-semibold text-sm">
                            <label htmlFor="cvv">
                              <TextScramble
                                text={
                                  CVVDisplayed === "" ? "###" : CVVDisplayed
                                }
                                autostart
                                wrappingElement="p" // Wraps the provided text in 'p' tags - <p>{text}</p>
                                characters="1234567890" // Scramble text using numbers only
                                speed={50}
                                delay={100}
                                revealText
                                revealSpeed={50}
                                revealMode="typewriter" // Reveal text from left to right
                              />
                            </label>
                          </span>
                        </div>
                        {/* Expire In */}
                        <div className="flex flex-col">
                          <span className="font-light text-xs">Expire in</span>
                          <span className="font-semibold text-sm flex">
                            <label htmlFor="month" className="cursor-pointer">
                              <TextScramble
                                text={
                                  monthDisplayed === "" ? "##" : monthDisplayed
                                }
                                autostart
                                wrappingElement="p" // Wraps the provided text in 'p' tags - <p>{text}</p>
                                characters="1234567890" // Scramble text using numbers only
                                speed={50}
                                delay={100}
                                revealText
                                revealSpeed={50}
                                revealMode="typewriter" // Reveal text from left to right
                              />
                            </label>
                            <span>/</span>
                            <label htmlFor="year" className="cursor-pointer">
                              <TextScramble
                                text={
                                  yearDisplayed === "" ? "##" : yearDisplayed
                                }
                                autostart
                                wrappingElement="p" // Wraps the provided text in 'p' tags - <p>{text}</p>
                                characters="1234567890" // Scramble text using numbers only
                                speed={50}
                                delay={100}
                                revealText
                                revealSpeed={50}
                                revealMode="typewriter" // Reveal text from left to right
                              />
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>

                {/* form  */}
                <form className="mx-auto w-[98%] xs:w-[400px] border-2 border-white p-10 rounded-md">
                  {/* card owner field */}
                  <TextField
                    id="cardOwner"
                    label="Card Owner"
                    variant="outlined"
                    className="w-full my-3"
                    value={cardOwner}
                    onBlur={handleCardOwnerBlur}
                    onChange={(e) => {
                      setCardOwner(e.currentTarget.value);
                    }}
                    sx={{
                      marginTop: "15px",
                      marginBottom: "25px",
                      "& .MuiInputLabel-root": {
                        color: "white", // Label en blanc
                        fontFamily: "Kanit",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          outline: "none", // Suppression du contour bleu
                          borderColor: "white", // Bordure en blanc
                          borderWidth: "0.5px", // Largeur de la bordure de base
                        },
                        "&:hover fieldset": {
                          borderColor: "white", // Couleur de la bordure au survol
                        },
                        "& .MuiInputBase-input": {
                          borderColor: "white", // Couleur de la bordure au survol
                          color: "white", // Couleur du texte saisi en blanc
                          fontFamily: "Kanit",
                        },
                      },
                    }}
                  />
                  {/* card number field */}
                  <TextField
                    id="cardNumber"
                    label="Card Number"
                    variant="outlined"
                    className="w-full my-3"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    sx={{
                      marginBottom: "25px",
                      "& .MuiInputLabel-root": {
                        color: "white", // Label en blanc
                        fontFamily: "Kanit",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          outline: "none", // Suppression du contour bleu
                          borderColor: "white", // Bordure en blanc
                          borderWidth: "0.5px", // Largeur de la bordure de base
                        },
                        "&:hover fieldset": {
                          borderColor: "white", // Couleur de la bordure au survol
                        },
                        "& .MuiInputBase-input": {
                          borderColor: "white", // Couleur de la bordure au survol
                          color: "white", // Couleur du texte saisi en blanc
                          fontFamily: "Kanit",
                        },
                      },
                    }}
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {/* cvv */}
                    <TextField
                      id="cvv"
                      label="CVV"
                      variant="outlined"
                      className="w-full my-3"
                      value={CVV}
                      onBlur={handleCVVBlur}
                      onChange={handleCVVChange}
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "white", // Label en blanc
                          fontFamily: "Kanit",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            outline: "none", // Suppression du contour bleu
                            borderColor: "white", // Bordure en blanc
                            borderWidth: "0.5px", // Largeur de la bordure de base
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Couleur de la bordure au survol
                          },
                          "& .MuiInputBase-input": {
                            borderColor: "white", // Couleur de la bordure au survol
                            color: "white", // Couleur du texte saisi en blanc
                            fontFamily: "Kanit",
                          },
                        },
                      }}
                    />
                    {/* month */}
                    <TextField
                      id="month"
                      label="month"
                      variant="outlined"
                      className="w-full my-3"
                      value={month}
                      onBlur={handleMonthBlur}
                      onChange={handleMonthChange}
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "white", // Label en blanc
                          fontFamily: "Kanit",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            outline: "none", // Suppression du contour bleu
                            borderColor: "white", // Bordure en blanc
                            borderWidth: "0.5px", // Largeur de la bordure de base
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Couleur de la bordure au survol
                          },
                          "& .MuiInputBase-input": {
                            borderColor: "white", // Couleur de la bordure au survol
                            color: "white", // Couleur du texte saisi en blanc
                            fontFamily: "Kanit",
                          },
                        },
                      }}
                    />
                    {/* year */}
                    <TextField
                      id="year"
                      label="year"
                      variant="outlined"
                      className="w-full my-3"
                      value={year}
                      onChange={handleYearChange}
                      onBlur={handleYearBlur}
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "white", // Label en blanc
                          fontFamily: "Kanit",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            outline: "none", // Suppression du contour bleu
                            borderColor: "white", // Bordure en blanc
                            borderWidth: "0.5px", // Largeur de la bordure de base
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Couleur de la bordure au survol
                          },
                          "& .MuiInputBase-input": {
                            borderColor: "white", // Couleur de la bordure au survol
                            color: "white", // Couleur du texte saisi en blanc
                            fontFamily: "Kanit",
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="mt-[25px]">
                    <Button
                      sx={{
                        color: "white", // Couleur du texte en blanc
                        borderColor: "white", // Couleur de la bordure en blanc
                        "&:hover": {
                          borderColor: "white", // Couleur de la bordure au survol en blanc
                        },
                        "& .MuiButton-endIcon": {
                          color: "white", // Couleur de l'icône en blanc
                        },
                      }}
                      variant="outlined"
                      className="w-full"
                      endIcon={<i className="fa-duotone fa-send"></i>}
                    >
                      Envoyer
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </main>
          {/* FOOTER  */}
          <footer className="text-xs text-center mt-3">
            <div>
              <i className="fa-duotone fa-code"></i> with{" "}
              <i className="fa-solid fa-heart"></i> By{" "}
              <a
                href="https://justkevin225.github.io/portfolio"
                rel="norefferrer"
                target="_blank"
                className="font-bold transition-all duration-200 hover:scale-125"
              >
                KEV
              </a>
            </div>
            <div className="flex justify-center gap-3 my-2 text-lg">
              <a
                href="https://www.linkedin.com/in/kevin-kouakou-234508252/"
                rel="noreferrer"
                target="_blank"
                className="hover:scale-110 transition-all duration-150"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/justkevin225"
                rel="noreferrer"
                target="_blank"
                className="hover:scale-110 transition-all duration-150"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
