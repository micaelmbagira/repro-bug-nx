import { foo } from '@repro-bug-nx/foo';

export function bar(): string {
  return foo() + ' bar';
}
