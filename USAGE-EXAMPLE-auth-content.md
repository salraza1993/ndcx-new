# Dynamic Auth Content Component - Usage Guide

## How It Works

The `auth-content` component now accepts **dynamic templates** through its `title` and `content` inputs. It uses:

- **`input<TemplateRef<unknown>>()`** - Modern Angular signal inputs that accept template references
- **`NgTemplateOutlet`** - Renders the templates dynamically
- **Fallback defaults** - If no templates are provided, it shows default content

## Usage Examples

### Example 1: Using Default Content (No Templates Passed)

```html
<!-- Shows default "Login to your Account" title and content -->
<app-auth-content />
```

### Example 2: Custom Title **Only**

```typescript
// parent.component.ts
import { Component } from '@angular/core';
import { AuthContent } from './auth-content/auth-content';

@Component({
  selector: 'app-login',
  imports: [AuthContent],
  template: `
    <ng-template #customTitle>
      <h5 class="mb-2">Welcome Back! 👋</h5>
    </ng-template>
    
    <app-auth-content [title]="customTitle" />
  `
})
export class LoginComponent {}
```

### Example 3: Both Custom Title and Content

```typescript
// forgot-password.component.ts
import { Component } from '@angular/core';
import { AuthContent } from './auth-content/auth-content';

@Component({
  selector: 'app-forgot-password',
  imports: [AuthContent],
  template: `
    <ng-template #resetTitle>
      <h5 class="mb-2">Reset Your Password</h5>
    </ng-template>
    
    <ng-template #resetContent>
      <p>
        Enter your registered <strong>Email Address</strong>
        and we'll send you a reset link.
      </p>
    </ng-template>
    
    <app-auth-content 
      [title]="resetTitle" 
      [content]="resetContent" 
    />
  `
})
export class ForgotPasswordComponent {}
```

### Example 4: Complex Content with Dynamic Data

```typescript
// signup.component.ts
import { Component, signal } from '@angular/core';
import { AuthContent } from './auth-content/auth-content';

@Component({
  selector: 'app-signup',
  imports: [AuthContent],
  template: `
    <ng-template #signupTitle>
      <h5 class="mb-2">Create New Account</h5>
      <p class="text-sm text-gray-500">Step {{ currentStep() }} of 3</p>
    </ng-template>
    
    <ng-template #signupContent>
      <div class="space-y-2">
        <p>Join thousands of users!</p>
        <ul class="list-disc ml-5">
          <li>Free forever</li>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
        </ul>
      </div>
    </ng-template>
    
    <app-auth-content 
      [title]="signupTitle" 
      [content]="signupContent" 
    />
  `
})
export class SignupComponent {
  currentStep = signal(1);
}
```

## How Template References Work

### 1. **Define Template**
```html
<ng-template #myTemplate>
  <p>Content here</p>
</ng-template>
```

### 2. **Pass to Component**
```html
<app-auth-content [title]="myTemplate" />
```

### 3. **Component Receives It**
```typescript
title = input<TemplateRef<unknown>>();
```

### 4. **Render with NgTemplateOutlet**
```html
<ng-container *ngTemplateOutlet="title()"></ng-container>
```

## Benefits

✅ **Reusable** - One component, multiple variations  
✅ **Type-safe** - Signal inputs with proper types  
✅ **Flexible** - Mix default and custom content  
✅ **Clean** - No prop drilling or complex logic  
✅ **Modern** - Uses Angular's latest signal inputs

## Advanced: Templates with Context

If you need to pass data to templates:

```typescript
// Component
titleContext = signal({ userName: 'John' });

// Template
<ng-template #titleWithContext let-userName="userName">
  <h5>Welcome, {{ userName }}!</h5>
</ng-template>

// Usage
<ng-container *ngTemplateOutlet="title(); context: titleContext()">
</ng-container>
```
