// createSubject 함수 정의
const createSubject = () => {
  let observers = []; // 관찰자 배열

  // 관찰자 등록 메서드
  // 주제 객체에 새로운 관찰자를 추가하는 역할을 한다
  // 새로운 관찰자는 observer 매개변수로 전달된다
  const addObserver = (observer) => {
    observers.push(observer);
  };

  // 색상 변경 알림 메서드
  // observers 배열의 각 관찰자에 대해 반복하며 모든 관찰자에게 새로운 색상을 알린다
  const setColor = (newColor) => {
    observers.forEach(observer => {
      observer.update1(newColor); 
      observer.update2(newColor);
    });
  };

  return {
    addObserver,
    setColor
  };
};

export { createSubject };
