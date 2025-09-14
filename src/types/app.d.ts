type CodePageTabOptions = ('tools' | 'contributions')[]

type CodePageTabOption = TupleElement<CodePageTabOptions>

type PageRoute = {
  Component: React.FC, 
  label?: string, 
  path: string 
}