import { colleges } from "@/data/colleges";

export async function fetchColleges() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(colleges);

    }, 1000);

  });

}