import swaggerSpec from '../../../swagger';
import SwaggerUIClient from '../../components/SwaggerUIClient';

export default function DocsPage() {
  return <SwaggerUIClient spec={swaggerSpec} />;
}
