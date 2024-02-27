export default function createRouter() {
	// 애플리케이션의 경로 목록들을 담을 배열. 클로저를 이용하여 데이터를 추가.
	const routes = []; 
  // navigate 메서드에서 checkRoutes() 호출하기 위해.
	let checkRoutes;
	
	const router = {
		// 라우터 기능 1. 애플리케이션의 경로 목록들을 저장.
	  addRoute(path, component){
	    routes.push({path, component});
	    return this;
	  },
		// 라우터 기능 2. 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체.
	  start() {
			// routes 배열에서 현재 브라우저 pathname 값과 동일한 pathname을 가진 구성 요소를 찾는다.
	    checkRoutes = () => {
	      const currentPath = window.location.pathname;
	      let currentRoute = routes.find(route => route.path === currentPath);
				// 현재 경로가 존재하지 않을 경우 기본 홈 페이지 경로로 설정 = 첫페이지
	      if(!currentPath) {
	        currentRoute = routes.find(route => route.path === "/");
	        history.pushState(null, null, "/");
	      }
				// 페이지 이동을 보여주기 위해 innerText를 변경하는 메서드
	      currentRoute.component();
	    }

			// 페이지가 로드될 때와 브라우저가 변경될 때마다 checkRoutes() 함수가 실행.
	    window.addEventListener('popstate', checkRoutes);
	    checkRoutes();
	  },

		// 버튼을 클릭했을때 data-navigate 속성 값을 가져와서 해당 값을 라우터의 navigate 매개변수로 전달하여 경로를 변경
		navigate(path){
			// 로컬스토리지의 모든 키를 가져오기
			const keys = Object.keys(localStorage);
			// 로컬스토리지 값 중에 true 값이나 checked 상태가 있는지 확인
			let hasTrueValue = false;
			let hasCheckedValue = false;
			for (const key of keys) {
				const value = localStorage.getItem(key);
				if (value === 'true') {
					hasTrueValue = true;
				} else if (value === 'checked') {
					hasCheckedValue = true;
				}
			}

			const nullValue = (window.localStorage.getItem('selectedOption') && window.localStorage.getItem('area')) === null;
			// 값 선택 안하면 화면 이동 막기
			if ((hasTrueValue && hasCheckedValue) && (window.location.pathname === '/')) {
				history.pushState(null, null, path);
				checkRoutes();
			} else if(!nullValue && (window.location.pathname === '/second')){
				history.pushState(null, null, path);
				checkRoutes();
			} else {
				alert("필수 질문을 확인해주세요.");
			}
		}
	}
	return router;
}