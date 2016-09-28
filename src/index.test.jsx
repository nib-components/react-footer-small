import React from 'react';
import Footer from './index.jsx';

describe('<FooterSmall/>', () => {
  it('should use the default fund rules URL if custom fund rules URL is unspecified', () => {
    const footer = $(render(<Footer/>).element);
    expect(footer.find('#ga-footer-fund-rules')[0].node.props.href).to.eql('https://www.nib.com.au/health-information/content/assets/pdf/nib-fund-rules.pdf');
  });

  it('should use the specified custom fund rules URL if provided', () => {
    const footer = $(render(<Footer fundRulesUrl="http://some.url/sample.pdf"/>).element);
    expect(footer.find('#ga-footer-fund-rules')[0].node.props.href).to.eql('http://some.url/sample.pdf');
  });
});
