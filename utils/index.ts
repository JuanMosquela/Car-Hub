export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a43a99b71bmsh021e07d984dd90dp117e7cjsn57a3d7fdfcc5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  let basePrice = 100;

  let adjustRate;
  if (year >= 2020) {
    adjustRate = 1.2;
  } else if (year >= 2010) {
    adjustRate = 1.0;
  } else {
    adjustRate = 0.8;
  }

  let rentValue = basePrice * adjustRate;

  if (city_mpg <= 20) {
    let discount = rentValue * 0.1;
    rentValue -= discount;
  }

  return rentValue;
};
