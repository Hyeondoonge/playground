import React, { ErrorInfo, ReactNode } from 'react';
import { MdRefresh } from 'react-icons/md';

interface IProps {
  fallback: ReactNode;
  children?: ReactNode;
}

interface IState {
  refresh: boolean;
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      refresh: false,
      hasError: false
    }; // 에러 상태 지정
  }

  static getDerivedStateFromError(error: unknown) {
    // 에러 발생 시, 상태를 변경하여 이에 따른 fallback UI를 렌더링한다
    // error는 컴포넌트에서 던진 에러
    return { hasError: true, refresh: false };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    // 이 함수는 optinal한 구현사항이다, 에러 발생 시 원하는 작업을 작성하면된다

    // error는 컴포넌트에서 던진 에러

    // 에러 로그 정보 출력 예시
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    console.log('error print: ', error, info.componentStack);
  }

  render() {
    const { fallback, children } = this.props;

    if (this.state.refresh) {
      return children;
    }

    if (this.state.hasError) {
      return (
        <div>
          {fallback}
          다시 시도할까요?
          <div onClick={() => this.setState({ hasError: false, refresh: true })}>
            <MdRefresh />
          </div>
        </div>
      );
    }

    return children;
  }
}
