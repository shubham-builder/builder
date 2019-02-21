import React from 'react';
import { BuilderBlock } from '../../decorators/builder-block.decorator';

export interface FormSelectProps {
  options?: { name?: string; value: string }[];
  attributes?: any;
  name?: string;
  value?: string;
}

@BuilderBlock({
  name: 'Form:Select',
  image:
    'https://cdn.builder.codes/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F83acca093fb24aaf94dee136e9a4b045',
  defaultStyles: {
    alignSelf: 'flex-start',
  },
  // Ah fuck I had this the whole time............
  inputs: [
    {
      name: 'options',
      type: 'list',
      required: true,
      subFields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'value',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
  ],
  ...({
    noWrap: true,
  } as any),
})
export class FormSelectProps extends React.Component<FormSelectProps> {
  render() {
    const { options } = this.props;
    return (
      <select value={this.props.value} name={this.props.name} {...this.props.attributes}>
        {options &&
          options.map(option => (
            <option value={option.value}>{option.name || option.value}</option>
          ))}
      </select>
    );
  }
}
