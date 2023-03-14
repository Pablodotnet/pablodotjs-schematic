import { Rule, SchematicContext, Tree, externalSchematic } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function pablodotjsSchematic(_options: any): Rule {
  const name = _options.name
  return (_: Tree, _context: SchematicContext) => {
    return externalSchematic('@schematics/angular', 'ng-new', {
      name,
      version: '15.0.0',
      directory: name,
      routing: false,
      style: 'css',
      inlineStyle: false,
      inlineTemplate: false
    })
  }
}
