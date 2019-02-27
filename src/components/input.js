import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render() {
        const Element = this.props.element || 'input';
        const { name } = this.props.input;

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <label htmlFor={name}>
                    {/* {this.props.label} */}
                    {error}
                    {warning}
                </label>
                <Element
                    {...this.props.input}
                    id={name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    autoComplete="on"
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                />
            </div>
        );
    }
}