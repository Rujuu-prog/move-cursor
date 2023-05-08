package main

import (
	"context"
	"fmt"
	"math/rand"
	"time"

	"github.com/go-vgo/robotgo"
)

// App struct
type App struct {
	ctx context.Context
	isMoveCursor bool
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) StartCursorMovement() {
	if !a.isMoveCursor {
		a.isMoveCursor = true
		go func() {
			for a.isMoveCursor {
				x, y := robotgo.GetMousePos()
				moveX := rand.Intn(201) - 50
				moveY := rand.Intn(201) - 50
				newX := x + moveX
				newY := y + moveY
				robotgo.MoveSmooth(newX, newY)
				time.Sleep(3 * time.Second)
			}
		}()
	}
}

// StopCursorMovement stops moving the mouse cursor
func (a *App) StopCursorMovement() {
	if a.isMoveCursor {
		a.isMoveCursor = false
	}
}
