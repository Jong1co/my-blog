import { Dispatch, SetStateAction } from 'react';

const options = {
  threshold: 1,
};

type ScrollDirection = 'up' | 'dn' | 'none';

export function getObserver(setState: Dispatch<SetStateAction<string>>) {
  let direction: ScrollDirection = 'none';
  let prevScrollY = 0;
  let intersectingArray: string[] = [];

  const checkScrollDirection = () => {};

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      //   if (entry.isIntersecting) {
      //     intersectingArray.push(entry.target.innerHTML);
      //   }
    });
  }, options);

  return observer;
}

// const [title, setTitle] = useState('');
// const [direction, setDirection] = useState('');
// const [array, setArray] = useState<IntersectionObserverEntry[]>([]);
// useEffect(() => {
//   const options = {
//     threshold: 1,
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log(entry);
//       }
//     });
//   }, options);

//   const h2 = document.querySelectorAll('h2');

//   h2.forEach((header) => {
//     io.observe(header);
//   });
// }, []);
