import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './Layouts/page-layout/page-layout.component';
import { DeepCloneComponent } from './pages/deep-clone/deep-clone.component';
import { SimpleCompilerComponent } from './pages/simple-compiler/simple-compiler.component';
import { CompareObjectComponent } from './pages/compare-object/compare-object.component';
import { SortingPipeComponent } from './pages/sorting-pipe/sorting-pipe.component';
import { RepeaterComponent } from './pages/repeater/repeater.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CustomSortPipe } from './pipes/customSort.pipe';
import { FormsModule } from '@angular/forms';
import { ContentRepeaterComponent } from './widgets/content-repeater/content-repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    DeepCloneComponent,
    SimpleCompilerComponent,
    CompareObjectComponent,
    SortingPipeComponent,
    RepeaterComponent,
    CustomSortPipe,
    ContentRepeaterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
