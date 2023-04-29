# Intro

카카오 튜플 문제를 풀면서 만났던 성능상 이슈로 통과하지 못한 풀이와, 해결한 풀이를 살펴보도록 하겠습니다.

## 문제 요약

- Input: `"{{2},{2,1},{2,1,3},{2,1,3,4}}"`

- Output: `[2, 1, 3, 4]`
- Input으로 들어온 숫자들의 갯수에 따라 큰 것부터 첫번째 인덱스에 추가하는 알고리즘

## 통과하지 못한 풀이

```javascript
function solution(s) {
  const hashTable = s
    .match(/\d+/g) //
    .reduce((prev, curr) => ({ ...prev, [curr]: (prev[curr] ?? 0) + 1 }), {}); //

  const answer = Object.entries(hashTable)
    .sort((a, b) => b[1] - a[1])
    .map((value) => Number(value[0]));

  return answer;
}
```

1. `Input`을 정규표현식을 통해 나눔
2. `Array.reduce()`를 이용해 `숫자 : 갯수` 형태의 해시테이블 생성
3. 갯수를 기준으로 정렬한 후에 Number로 변환해서 값 도출

위의 알고리즘을 이용해 정답을 제출했을 때 시간 초과가 나타나는 것을 확인할 수 있었습니다..

## 통과한 풀이

```javascript
function solution(s) {
  const tuple = [];
  const answer = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']')).sort((a, b) => a.length - b.length);

  answer.forEach((v) => {
    v.forEach((a) => {
      if (!tuple.includes(a)) {
        tuple.push(a);
      }
    });
  });
  return tuple;
}
```

**여러 방향으로 생각해본 결과 :**
ex) `"{{2},{2,1},{2,1,3},{2,1,3,4}}"`

- **가장 많은 숫자** -> 요소 한 개의 배열의 숫자 `[2]`

- **두번째 많은 숫자** -> 요소 두 개의 배열 중 앞에 배열에 추가되지 않은 숫자 `[2, 1] -> 1`
  ...

1. `JSON.parse()`를 이용해 `array` 형태로 전환 후 갯수에 따라 정렬
1. `answer.forEach()`를 통해 for문을 돌리고, 만약 이 전 포함된 숫자가 아니라면 tuple에 push 하는 방식으로 해결했습니다.
