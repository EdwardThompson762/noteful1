import React from 'react';

class ErrorBoundary extends React.Component{
    state = {hasError: false}
    render(){
        if (this.state.hasError){
            return <div>
                        Error has occured
                    </div>
        }
    }
}
export default ErrorBoundary;