## Intro

> 주어진 문자열로 숫자를 생성하고, 해당 숫자가 소수인지 아닌지 판별하는 알고리즘 문제  
> [프로그래머스 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)

## 풀이 과정

`17` 이 주어졌을 때 `[1, 7, 17, 71]` 을 전부 검사해야 한다. => **완전 탐색**

중복되는 숫자는 존재하지 않는다. => **Set 자료형**

깊이 우선 탐색을 통해 숫자를 고정시키고, 나머지 숫자를 차례대로 채워 나가면서 소수인 경우 set에 추가해주는 방식으로 풀이했다.

## 통과한 풀이

```javascript
function isPrime(num) {
  num = Number(num);
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const set = new Set();
  const nums = numbers.split('');

  const dfs = (set, nums, fixed) => {
    if (nums.length > 0) {
      for (let i = 0; i < nums.length; i++) {
        const newFixed = fixed + nums[i];
        let newNums = [...nums];
        newNums.splice(i, 1);

        if (isPrime(newFixed)) {
          set.add(Number(newFixed));
        }
        dfs(set, newNums, newFixed);
      }
    }
  };

  dfs(set, nums, '');
  return set.size;
}
```

## 의문점

> dfs를 solution 함수 외부에 선언했을 때 몇가지 테스트 케이스에서 훨씬 빠른 성능을 보여줬다. 스코프 체인 관련 문제인 거 같긴 한데 잘 모르겠다.. 찾아봐야겠다.
