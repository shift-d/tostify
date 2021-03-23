console.log("Project boilerplate");

function testMethodDecorator(): MethodDecorator {
  return (
    target: Object,
    propertyKey: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    return descriptor;
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TestClass {
  @testMethodDecorator()
  testMethod() {
    this.testMethod();
  }
}
