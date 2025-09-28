# Images Directory

## Comment ajouter un logo

1. **Placez votre fichier logo** dans ce dossier (`src/assets/images/`)
   - Formats recommandés : PNG, SVG, JPG
   - Exemple : `logo.png`, `logo.svg`

2. **Référencez l'image dans vos templates** :
   ```html
   <img src="assets/images/logo.png" alt="Logo" class="logo">
   ```

3. **Utilisez dans le CSS** :
   ```css
   .logo {
     background-image: url('assets/images/logo.png');
   }
   ```

## Emplacements suggérés pour le logo

### Dans la toolbar (recommandé) :
- Ajoutez dans `app.component.html` entre le bouton menu et le titre
- Taille suggérée : 40x40px ou 50x50px

### Dans la page d'accueil :
- Ajoutez dans `home.component.html` 
- Taille suggérée : 100x100px ou plus

## Exemple d'intégration dans la toolbar :

```html
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <button mat-icon-button (click)="opened=!opened">
      <mat-icon>menu</mat-icon>
    </button>
    
    <!-- Logo ici -->
    <img src="assets/images/logo.png" alt="Logo" class="toolbar-logo">
    
    <span>Assignment App</span>
    <!-- ... reste du code -->
  </mat-toolbar-row>
</mat-toolbar>
```

## CSS suggéré pour le logo dans la toolbar :

```css
.toolbar-logo {
  height: 40px;
  width: auto;
  margin: 0 16px;
}
```